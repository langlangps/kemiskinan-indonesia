from django.shortcuts import render

# Create your views here.
def index(request):

    return render(request, 'home/index.html')

def testing(request):

    return render(request, 'home/index2.html')