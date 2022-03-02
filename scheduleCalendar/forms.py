from django import forms


class EventForm(forms.Form):

    start_date = forms.IntegerField(required=True)
    end_date = forms.IntegerField(required=True)
    event_name = forms.CharField(required=True, max_length=32)

class CalendarForm(forms.Form):

    start_date = forms.IntegerField(required=True)
    end_date = forms.IntegerField(required=True)