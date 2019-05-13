from django.conf.urls import url, include
import itemPrice.views as views

urlpatterns = [
    url(r'add_ruberPriceItem$', views.add_ruberPriceItem, ),
    url(r'show_ruberPrice$', views.show_ruberPrice, ),
    url(r'show_ruberAll$',views.show_ruberAll),
    ]