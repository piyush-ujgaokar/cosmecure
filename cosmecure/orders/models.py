import uuid
from django.db import models


# Create your models here.

class Order(models.Model):
    order_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    product_name = models.CharField(max_length=200)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
