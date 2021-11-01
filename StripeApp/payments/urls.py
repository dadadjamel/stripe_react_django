from django.conf.urls import url
from payments import views
from django.urls import path

urlpatterns = [
    path('test-payment/', views.test_payment),
    path('save-stripe-info/', views.save_stripe_info)
]