from django.db import models
import django.utils.timezone as timezone
# Create your models here.


# 用户信息表格
class User(models.Model):
    user_name = models.CharField(max_length=10, blank=False)
    user_password = models.CharField(max_length=20, blank=False)
    user_phone_number = models.CharField(max_length=11)
    date = models.DateTimeField(default = timezone.now, auto_now_add=False)


# 邮件交互信息表格
class Email(models.Model):
    # 收件人
    get_user_name = models.CharField(max_length=10)
    # 发件人
    post_user_name = models.CharField(max_length=10)
    topic = models.CharField(max_length=20)
    content = models.CharField(max_length=300)
    file = models.FileField(upload_to='file')
    # Django项目会自动保存日期 无需自己操作
    date = models.DateTimeField(default = timezone.now, auto_now_add=False)
    # 检测收件人是否删除 默认为:False未删除
    get_user_delete = models.BooleanField(default=False)
    # 检测发件人是否删除 默认为:False未删除
    post_user_delete = models.BooleanField(default=False)
    # 查看收件箱新建是否已读
    read = models.BooleanField(default=False)
