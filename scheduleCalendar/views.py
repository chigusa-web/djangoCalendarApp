from django.template import loader
from django.http import HttpResponse

# Create your views here.


def index(request):
    """
    カレンダー画面
    """
    template = loader.get_template("scheduleCalendar/index.html")
    return HttpResponse(template.render())