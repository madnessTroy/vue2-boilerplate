import moment from 'moment'

export const dateFormat = (value) => moment(value).format('LL')

export const dateTimeFormat = (value) => moment(value).format('YYYY-MM-DD HH:mm')

export const fromNow = (value) => moment(value).fromNow()

export const toNow = (value) => moment(value).toNow()

/*
* format string:
* */
export const customDateFormat = (value, format = 'YYYY-MM-DD') => moment(value).format(format.toString())
