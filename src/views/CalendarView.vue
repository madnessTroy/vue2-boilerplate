<template>
    <div>
        <Calendar></Calendar>
    </div>
</template>

<script>
import Calendar from '@/components/Calendar'
import { ListUser } from '@/api/Test.api'

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
        },
        async testFetch() {
            const res = await ListUser({get: '123123'})
            console.log(res)
        }
    },
    mounted() {
        this.parse()
        this.testFetch()
    }
}
</script>
