from django.db import models

class RuberPriceItem(models.Model):
    ruber_name = models.CharField(max_length = 64)
    ruber_date = models.DateTimeField(auto_now_add=True)
    ruber_price = models.IntegerField(default=0)