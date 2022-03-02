document.addEventListener('DOMContentLoaded', function () {

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',

        // 日付をクリック、または範囲を選択したイベント
        selectable: true,
        select: function (info) {
            //alert("selected " + info.startStr + " to " + info.endStr);

            // 入力ダイアログ
            const eventName = prompt("イベントを入力してください");

            if (eventName) {
                // イベントの追加
                calendar.addEvent({
                    title: eventName,
                    start: info.start,
                    end: info.end,
                    allDay: true,
                });
            }
        },
    });

    calendar.render();
});