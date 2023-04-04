import moment from 'moment'

const now = new Date()

export const dateFormat = (value) => moment(value).format('LL')

export const dateTimeFormat = (value) => moment(value).format('YYYY-MM-DD HH:mm')

export const fromNow = (value) => moment(value).fromNow()

export const toNow = (value) => moment(value).toNow()

export const isBefore = (firstValue, secondValue) => moment(firstValue).isBefore(secondValue)

export const isAfter = (firstValue, secondValue) => moment(firstValue).isAfter(secondValue)
/*
* format string:
* */
export const customDateFormat = (value, format = 'YYYY-MM-DD') => moment(value).format(format.toString())
