"""YunZhenProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from app import views
import app


urlpatterns = [
    # path('<slug:username>/<int:email_id>', views.mail_details, name='mail_details'),
    # path('', views.test),
    path('email/', views.email, name='email'),
    path('', views.sign_in, name='sign_in'),
    path('postwork/', views.postwork, name='postwork'),
    path('register/', views.register, name='register'),
    path('inbox/', views.inbox, name='inbox'),
    path('outbox/', views.outbox, name='outbox'),
    path('log_out/', views.log_out, name='log_out'),
    path('retrievepassword/', views.retrievepassword, name='retrievepassword'),
    path('delete/', views.delete, name='delete'),
    path('all_read/', views.all_read, name='all_read'),
    re_path(r'^(.*?)/$', views.page_not_found, name='404'),
]

# handler404 = "app.views.page_not_found"