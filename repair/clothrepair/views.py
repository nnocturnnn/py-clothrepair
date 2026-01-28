from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import json
import requests

# Helper function to send Telegram messages
def send_telegram_message(text, photo=None):
    try:
        url = f"https://api.telegram.org/bot{settings.TELEGRAM_BOT_TOKEN}/sendMessage"
        data = {
            'chat_id': settings.TELEGRAM_CHAT_ID,
            'text': text,
            'parse_mode': 'HTML'
        }
        
        if photo:
            url = f"https://api.telegram.org/bot{settings.TELEGRAM_BOT_TOKEN}/sendPhoto"
            data = {
                'chat_id': settings.TELEGRAM_CHAT_ID,
                'caption': text,
                'parse_mode': 'HTML'
            }
            files = {'photo': photo}
            response = requests.post(url, data=data, files=files)
        else:
            response = requests.post(url, json=data)
            
        return response.status_code == 200
    except Exception as e:
        print(f"Telegram Error: {e}")
        return False

def index(request):
    return render(request, 'index.html')

@csrf_exempt
def book_repair(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            phone = data.get('phone')
            date = data.get('date')
            time = data.get('time')
            description = data.get('description')

            message = (
                f"🔔 <b>Новая заявка на ремонт</b>\n\n"
                f"👤 <b>Имя:</b> {name}\n"
                f"📞 <b>Телефон:</b> {phone}\n"
                f"📅 <b>Дата:</b> {date}\n"
                f"⏰ <b>Время:</b> {time}\n"
                f"📝 <b>Описание:</b> {description}"
            )

            if send_telegram_message(message):
                return JsonResponse({'status': 'success', 'message': 'Booking confirmed and sent to Telegram.'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Failed to send Telegram notification.'}, status=500)

        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method.'}, status=405)

@csrf_exempt
def submit_review(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            rating = data.get('rating')
            comment = data.get('comment')

            stars = "⭐" * int(rating)

            message = (
                f"🌟 <b>Новый отзыв</b>\n\n"
                f"👤 <b>Имя:</b> {name}\n"
                f"✨ <b>Оценка:</b> {stars} ({rating}/5)\n"
                f"💬 <b>Комментарий:</b> {comment}"
            )

            if send_telegram_message(message):
                return JsonResponse({'status': 'success', 'message': 'Review submitted and sent to Telegram.'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Failed to send Telegram notification.'}, status=500)

        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method.'}, status=405)

@csrf_exempt
def submit_quote(request):
    if request.method == 'POST':
        try:
            # Handle FormData (multipart/form-data)
            name = request.POST.get('name')
            contact = request.POST.get('contact')
            description = request.POST.get('description')
            image = request.FILES.get('image')

            message = (
                f"❓ <b>Запрос оценки</b>\n\n"
                f"👤 <b>Имя:</b> {name}\n"
                f"📞 <b>Контакты:</b> {contact}\n"
                f"📝 <b>Описание:</b> {description}"
            )

            if send_telegram_message(message, photo=image):
                return JsonResponse({'status': 'success', 'message': 'Quote request sent to Telegram.'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Failed to send Telegram notification.'}, status=500)

        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method.'}, status=405)
