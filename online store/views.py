from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('main')
        else:
            context = {'error': 'Invalid credentials'}
            return render(request, 'login.html', context)
    else:
        return render(request, 'login.html')

def main_view(request):
    return render(request, 'main.html')
