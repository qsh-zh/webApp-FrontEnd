from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.core import serializers
import requests
import json


from itemPrice.models import RuberPriceItem
# Create your views here.
@require_http_methods(["GET"])
def add_ruberPriceItem(request):
    response = {}
    try:
        ruberItem = RuberPriceItem(ruber_name=request.GET.get('ruber_name'),
                                    ruber_date=request.GET.get('ruber_date'),
                                    ruber_price=request.GET.get('ruber_price'))
        ruberItem.save()
        response['msg'] = 'success'
        response['error_num']=0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

@require_http_methods(["GET"])
def show_ruberPrice(request):
    response = {}
    try:
        ruberPrice = RuberPriceItem.objects.filter(ruber_name=request.GET.get('ruber_name'))
        response['list'] = json.loads(serializers.serialize("json", ruberPrice))
        response['msg'] = 'success'
        response['error_num']=0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

@require_http_methods(["GET"])
def show_ruberAll(request):
    response = {}
    try:
        ruberPrice = RuberPriceItem.objects.filter()
        response['list'] = json.loads(serializers.serialize("json", ruberPrice))
        response['msg'] = 'success'
        response['error_num']=0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)