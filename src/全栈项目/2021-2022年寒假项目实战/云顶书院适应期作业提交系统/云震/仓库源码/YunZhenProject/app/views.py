import random
import django.utils.timezone as timezone
from django.core.paginator import Paginator
from django.db.models import Q
from django.http import StreamingHttpResponse, FileResponse
from django.shortcuts import render, HttpResponse, redirect
from django.utils.encoding import escape_uri_path
import requests
from .models import *
from datetime import datetime
# 登录界面


def sign_in(request):  # 登录界面
    td_h = datetime.today().hour  # 获取 当前时间的小时
    title = "欢迎来到作业提交系统"
    if request.method == "GET":
        # return render(request, "login.html", {"title": title})
        return render(request, "login.html", {"title": title, "td_h": td_h})

    number = request.POST.get("user_phone_number")
    get_password = request.POST.get("user_password")
    check = User.objects.filter(user_phone_number=f"{number}").exists()
    if check:
        obj = User.objects.filter(user_phone_number=f"{number}").first()
        password = obj.user_password
        if password == get_password:
            request.session["info"] = {"id": obj.id, "user_phone_number": number, "user_name": obj.user_name}
            return redirect('/inbox/')
        else:
            title = "密码错误，请重新尝试"
            return render(request, "login.html", {"title": title, "td_h": td_h})
    else:
        title = "账号不存在，请检查账号"
        return render(request, "login.html", {"title": title, "td_h": td_h})


# 邮件详情页面
def email(request):
    try:
        user_information = request.session.get('info')
        user_id = user_information['id']
        user_phone_number = user_information['user_phone_number']
        user_name = user_information['user_name']
        email_id = request.GET.get('email_id')
        email_information = Email.objects.get(id=email_id)

        if user_name == email_information.get_user_name:
            Email.objects.filter(id=email_id).update(read=True)
            in_out = 'in'
        else:
            in_out = 'out'

        next = Email.objects.filter(id__lt=email_id).exists()
        if next:
            next = Email.objects.filter(id__lt=email_id).order_by('-id').first().id
        else:
            next = email_id
        previous = Email.objects.filter(id__gt=email_id).exists()
        if previous:
            previous = Email.objects.filter(id__gt=email_id).first().id
        else:
            previous = email_id
        content = {
            'id': email_information.id,
            'get_user_name': email_information.get_user_name,
            'post_user_name': email_information.post_user_name,
            'topic': email_information.topic,
            'content': email_information.content,
            'file': '../static/upload/' + str(email_information.file),
            'date': email_information.date,
            'user_phone_number': user_phone_number,
            'filename': str(email_information.file)[5:],
            'previous': previous,
            'next': next,
            'in_out': in_out,
        }
        return render(request, 'email.html', content)
    except:
        return redirect('/')


# 提交作业页面
def postwork(request):
    try:
        if request.method == 'GET':
            user_information = request.session.get('info')
            user_phone_number = user_information['user_phone_number']
            user_name = user_information['user_name']
            content = {
                'user_phone_number': user_phone_number,
                'user_name': user_name,
            }
            return render(request, 'postwork.html', content)
        else:
            user_information = request.session.get('info')
            user_name = user_information['user_name']
            user_phone_number = user_information['user_phone_number']
            get_user_name = request.POST.get('get_user_name')
            topic = request.POST.get('topic')
            content = request.POST.get('content')
            filename = request.FILES.get('filename')
            user_name_exist = User.objects.filter(user_name=get_user_name).exists()
            if user_name == '':
                content = {
                    'content': content,
                    'topic': topic,
                    'get_user_name': get_user_name,
                    'user_name': user_name,
                    'user_phone_number': user_phone_number,
                    'error': ' 请输入收件人'
                }
                return render(request, 'postwork.html', content)
            elif not user_name_exist:
                content = {
                    'content': content,
                    'topic': topic,
                    'get_user_name': get_user_name,
                    'user_name': user_name,
                    'user_phone_number': user_phone_number,
                    'error': ' 该收件人不存在，请核实收件人信息'
                }
                return render(request, 'postwork.html', content)
            elif user_name == get_user_name:
                content = {
                    'content': content,
                    'topic': topic,
                    'get_user_name': get_user_name,
                    'user_name': user_name,
                    'user_phone_number': user_phone_number,
                    'error': ' 你不能给自己发邮件哦'
                }
                return render(request, 'postwork.html', content)
            else:
                email_information = Email()
                email_information.get_user_name = get_user_name
                email_information.post_user_name = user_name
                email_information.topic = topic
                email_information.content = content
                email_information.file = filename
                email_information.save()
                return redirect('/inbox/')
    except:
        return redirect('/')


# 注册页面
def register(request):
    if request.method == 'GET':
        content = {
            'error': '每一次作业都是在提升自己！'
        }
        return render(request, 'register.html', content)
    else:
        if request.POST.get('submit') == '发送验证码':
            code = ''
            try:
                user_name = request.POST.get('user_name')
                user_password = request.POST.get('user_password')
                test_user_password = request.POST.get('test_user_password')
                user_phone_number = request.POST.get('user_phone_number')
                user_name_exist = User.objects.filter(user_name=user_name).exists()
                user_phone_number_exist = User.objects.filter(user_phone_number=user_phone_number).exists()
                if len(user_name) > 10:
                    content = {
                        'user_name': user_name,
                        'user_password': user_password,
                        'test_user_password': test_user_password,
                        'user_phone_number': user_phone_number,
                        'error': '请填写小于十个字符的用户名',
                    }
                    return render(request, 'register.html', content)
                elif user_name == '' or user_password == '' or test_user_password == '' or user_phone_number == '':
                    content = {
                        'user_name': user_name,
                        'user_password': user_password,
                        'test_user_password': test_user_password,
                        'user_phone_number': user_phone_number,
                        'error': '请严格按照规定将信息填写完整'
                    }
                    return render(request, 'register.html', content)
                elif user_name_exist:
                    content = {
                        'user_name': user_name,
                        'user_password': user_password,
                        'test_user_password': test_user_password,
                        'user_phone_number': user_phone_number,
                        'error': '该用户名已存在',
                    }
                    return render(request, 'register.html', content)
                elif len(user_password) > 20:
                    content = {
                        'user_name': user_name,
                        'user_password': user_password,
                        'test_user_password': test_user_password,
                        'user_phone_number': user_phone_number,
                        'error': '请填写小于二十个字符的密码'
                    }
                    return render(request, 'register.html', content)
                elif test_user_password != user_password:
                    content = {
                        'user_name': user_name,
                        'user_password': user_password,
                        'test_user_password': test_user_password,
                        'user_phone_number': user_phone_number,
                        'error': '两次密码填写不一致'
                    }
                    return render(request, 'register.html', content)
                elif len(user_phone_number) != 11:
                    content = {
                        'user_name': user_name,
                        'user_password': user_password,
                        'test_user_password': test_user_password,
                        'user_phone_number': user_phone_number,
                        'error': '请输入正确的手机号'
                    }
                    return render(request, 'register.html', content)
                elif user_phone_number_exist:
                    content = {
                        'user_name': user_name,
                        'user_password': user_password,
                        'test_user_password': test_user_password,
                        'user_phone_number': user_phone_number,
                        'error': '该手机号已被注册'
                    }
                    return render(request, 'register.html', content)
                else:
                    for num in range(4):
                        number = str(random.randint(0, 9))
                        code = code + number

                    header = {
                        "Authorization": "APPCODE 843677f6edc44aff9a51962d288e6e96",
                    }
                    body = {
                        "content": f"code:{code}",
                        "phone_number": f"{user_phone_number}",
                        "template_id": "TPL_0000"
                    }
                    url = 'https://dfsns.market.alicloudapi.com/data/send_sms'
                    response = requests.post(url=url, data=body, headers=header)
                    request.session['verification_code'] = code
                    content = {
                        'user_name': user_name,
                        'user_password': user_password,
                        'test_user_password': test_user_password,
                        'user_phone_number': user_phone_number,
                        'error': '验证码已成功发送'
                    }
                    return render(request, 'register.html', content)
            except:
                content = {
                    'user_name': user_name,
                    'user_password': user_password,
                    'test_user_password': test_user_password,
                    'user_phone_number': user_phone_number,
                    'error': '请严格按照规定将信息填写完整'
                }
                return render(request, 'register.html', content)
        else:
            user_name = request.POST.get('user_name')
            user_password = request.POST.get('user_password')
            test_user_password = request.POST.get('test_user_password')
            user_phone_number = request.POST.get('user_phone_number')
            verification_code = request.POST.get('verification_code')
            code = request.session.get('verification_code')
            if user_name == '' or user_password == '' or test_user_password == '' or user_phone_number == '' or verification_code == '':
                content = {
                    'user_name': user_name,
                    'user_password': user_password,
                    'test_user_password': test_user_password,
                    'user_phone_number': user_phone_number,
                    'error': '请严格按照规定将信息填写完整'
                }
                return render(request, 'register.html', content)

            if code != verification_code:
                user_name = request.POST.get('user_name')
                user_password = request.POST.get('user_password')
                test_user_password = request.POST.get('test_user_password')
                user_phone_number = request.POST.get('user_phone_number')
                content = {
                    'user_name': user_name,
                    'user_password': user_password,
                    'test_user_password': test_user_password,
                    'user_phone_number': user_phone_number,
                    'verification_code': verification_code,
                    'error': '每一次作业都是在提升自己！'
                }
                return render(request, 'register.html', content)
            else:
                user = User()
                user.user_name = request.POST.get('user_name')
                user.user_password = request.POST.get('user_password')
                user.user_phone_number = request.POST.get('user_phone_number')
                user.save()
                request.session.flush()
                return redirect('/')


# 收件箱
def inbox(request):
    check = request.session.get("info")
    if check:
        print(check)
        if request.GET.get('search', '') == '':
            # 获取用户名
            name = request.session.get("info")["user_name"]
            data_list = Email.objects.filter(get_user_name=name, get_user_delete=False).order_by('-date')

            # 分页功能
            page = request.GET.get('page', '1')
            paginator = Paginator(data_list, 14)
            data_list = paginator.get_page(page)

            # 修正 css 数据
            number = 50
            number_font = 63
            number_delete = 58
            number_second = 69
            for data_dic in data_list:
                data_dic.number_font = str(number_font)
                data_dic.number = str(number)
                data_dic.number_delete = str(number_delete)
                data_dic.number_second = str(number_second)
                number = number + 50
                number_font = number_font + 50
                number_delete = number_delete + 50
                number_second = number_second + 50

            return render(request, "in_box.html", {"data_list": data_list})
        else:
            search = request.GET.get('search').strip()
            condition = None
            for q in search.split(' '):
                if condition is None:
                    condition = Q(topic__icontains=q)
                else:
                    condition = condition | Q(topic__icontains=q)
            data_list = []
            if condition is not None:
                name = request.session.get("info")["user_name"]
                data_list = Email.objects.filter(condition, get_user_delete=False, get_user_name=name)

            # 分页功能
            page = request.GET.get('page', '1')
            paginator = Paginator(data_list, 14)
            data_list = paginator.get_page(page)

            # 修正 css 数据
            number = 50
            number_font = 63
            number_delete = 58
            number_second = 69
            for data_dic in data_list:
                data_dic.number_font = str(number_font)
                data_dic.number = str(number)
                data_dic.number_delete = str(number_delete)
                data_dic.number_second = str(number_second)
                number = number + 50
                number_font = number_font + 50
                number_delete = number_delete + 50
                number_second = number_second + 50

            content = {
                'data_list': data_list,
                'search': search,
            }
            return render(request, 'in_box.html', content)
    else:
        return redirect('/')


# 发件箱
def outbox(request):
    check = request.session.get("info")
    if check:
        print(check)
        if request.GET.get('search', '') == '':
            master = request.session.get("info")["user_name"]
            data_list = Email.objects.filter(post_user_name=master, post_user_delete=False).order_by('-date')

            # 分页功能
            page = request.GET.get('page', '1')
            paginator = Paginator(data_list, 14)
            data_list = paginator.get_page(page)

            # 修正 css 数据
            number = 50
            number_font = 63
            number_delete = 58
            number_second = 69
            for data_dic in data_list:
                data_dic.number_font = str(number_font)
                data_dic.number = str(number)
                data_dic.number_delete = str(number_delete)
                data_dic.number_second = str(number_second)
                number = number + 50
                number_font = number_font + 50
                number_delete = number_delete + 50
                number_second = number_second + 50

            return render(request, "out_box.html", {"data_list": data_list})
        else:
            search = request.GET.get('search').strip()
            condition = None
            for q in search.split(' '):
                if condition is None:
                    condition = Q(topic__icontains=q)
                else:
                    condition = condition | Q(topic__icontains=q)
            data_list = []
            if condition is not None:
                master = request.session.get("info")["user_name"]
                data_list = Email.objects.filter(condition, post_user_name=master, post_user_delete=False)

            # 分页功能
            page = request.GET.get('page', '1')
            paginator = Paginator(data_list, 14)
            data_list = paginator.get_page(page)

            # 修正 css 数据
            number = 50
            number_font = 63
            number_delete = 58
            number_second = 69
            for data_dic in data_list:
                data_dic.number_font = str(number_font)
                data_dic.number = str(number)
                data_dic.number_delete = str(number_delete)
                data_dic.number_second = str(number_second)
                number = number + 50
                number_font = number_font + 50
                number_delete = number_delete + 50
                number_second = number_second + 50

            content = {
                'data_list': data_list,
                'search': search,
            }
            return render(request, 'out_box.html', content)
    else:
        return redirect('/')


def log_out(request):  # 退出登录
    request.session.flush()
    return redirect('/')


def retrievepassword(request):
    title = "云震"
    number = request.POST.get("user_phone_number")
    if request.POST.get("button") == "发送验证码":
        check_number = User.objects.filter(user_phone_number=number).exists()
        if check_number:
            coder = str(random.randint(999, 9999))
            header = {
                "Authorization": "APPCODE 843677f6edc44aff9a51962d288e6e96",
            }
            body = {
                "content": f"code:{coder}",
                "phone_number": f"{number}",
                "template_id": "TPL_0000"
            }
            url = 'https://dfsns.market.alicloudapi.com/data/send_sms'
            response = requests.post(url=url, data=body, headers=header)
            get_password = request.POST.get("new_password", '')
            re_get_password = request.POST.get("test_new_password", '')
            context = {
                "number": number,
                "title": '已发送验证码',
                "get_password": get_password,
                "re_get_password": re_get_password
                       }
            request.session["coder"] = coder

            return render(request, 'retrievepassword.html', context=context)
        else:
            title = "未找到此手机号的用户"
            return render(request, 'retrievepassword.html', {"title": title, "number": number})
    elif request.POST.get("button") == "提交":
        get_code = request.POST.get("verification_code", "")
        get_password = request.POST.get("new_password")
        re_get_password = request.POST.get("test_new_password")
        content = {
            "title": title,
            "number": number,
            "get_code": get_code,
            "get_password": get_password,
            "re_get_password": re_get_password
        }
        if get_password == '' or re_get_password == '' or get_code == '' or number == '':
            content["title"] = "所有数据均不能为空"
            return render(request, 'retrievepassword.html', content)

        if get_code == request.session.get("coder") and get_password != re_get_password:
            content["title"] = "两次密码并不一致！"
            return render(request, 'retrievepassword.html', content)
        elif get_code != request.session.get("coder") and get_password == re_get_password:
            content["title"] = "验证码错误请重输！"
            return render(request, 'retrievepassword.html', content)
        elif get_code != request.session.get("coder") and get_password != re_get_password:
            content["title"] = "验证码和再次确认都有误！"
            return render(request, 'retrievepassword.html', content)
        else:
            data = User.objects.filter(user_phone_number=number).update(user_password=get_password)
            content["title"] = "您的密码已经重置成功！"
            request.session.flush()
            return render(request, 'retrievepassword.html', content)
    return render(request, 'retrievepassword.html', {"title": title})


# 删除邮箱操作
def delete(request):
    email_id = request.GET.get('email_id')
    in_out = request.GET.get('in_out')
    user_information = request.session['info']
    if in_out == 'in':
        Email.objects.filter(id=email_id).update(get_user_delete=True)
        return redirect('/inbox/')
    else:
        Email.objects.filter(id=email_id).update(post_user_delete=True)
        return redirect('/outbox/')


# 全部已读操作
def all_read(request):
    try:
        user_information = request.session.get('info')
        user_name = user_information.user_name
        Email.objects.filter(get_user_name=user_name).update(read=True)
        return redirect('/inbox/')
    except:
        return redirect('/')


# 自定义404页面
def page_not_found(request, exception):
    return render(request, '404.html')
