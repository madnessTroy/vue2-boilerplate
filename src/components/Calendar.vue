<template>
    <div>
        <full-calendar :options="calendarOptions"></full-calendar>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGrindPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    name: 'Calendar',
    data() {
        return {
            calendarOptions: {
                plugins: [dayGrindPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                weekends: true,
                events: [
                    { title: 'event 1', date: '2023-04-01', end: '2023-04-03', backgroundColor: 'red', borderColor: 'white' },
                    { title: 'event 2', date: '2023-04-02', end: '2023-04-07' }
                ],
                editable: true,
                selectable: true,
                selectMirror: false,
                dayMaxEvents: true
            }
        }
    },
    components: {
        FullCalendar
    }
}
</script>
