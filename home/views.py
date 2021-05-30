from django.http.response import HttpResponse
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Message

# Create your views here.
def index(request):

    return render(request, 'home/index.html')

def testing(request):

    return render(request, 'home/index3.html')

def contact_us(request):

    if request.POST is not None:
        try :
            name = request.POST['name']
            email = request.POST['email']
            message = request.POST['message']

            user_message = Message(
                name = name,
                email = email,
                message = message
            )

            user_message.save()

            return HttpResponseRedirect(reverse('kemiskinan_indonesia:home'))
        except Exception as e:
            return HttpResponse(e)
    
    else :
        return HttpResponseRedirect(reverse('kemiskinan_indonesia:home'))