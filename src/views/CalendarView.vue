<template>
    <div>
        <Calendar></Calendar>
    </div>
</template>

<script>
import Calendar from '@/components/Calendar'

export default {
    name: 'CalendarView',
    components: { Calendar },
    data() {
        return {
            test: null
        }
    },
    methods: {
        parse() {
            const date = new Date()
            this.test = this.$moment.dateTimeFormat(date)
        }
    },
    mounted() {
        this.parse()
    }
}
</script>
