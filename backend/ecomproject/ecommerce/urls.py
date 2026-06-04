from django.urls import path
from ecommerce import views

urlpatterns = [
    path("", views.getRoutes, name="getRoutes"),
    path("products", views.getProduct, name="product"),
]
