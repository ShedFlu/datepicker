import {PickerElements} from './utilsCreateCalendar'

// TODO - ensure all types are being used. Remove export if not being consumed elsewhere.

export type DatepickerOptions = {
  /**
   * Callback function after a date has been selected. The 2nd argument is the selected date when a date is being selected and `undefined` when a date is being unselected. You unselect a date by clicking it again.
   */
  onSelect?(onSelectOptions: {prevDate: Date; newDate: Date | undefined}): void

  /**
   * Callback function when the calendar is shown.
   */
  onShow?(instance: DatepickerInstance): void

  /**
   * Callback function when the calendar is hidden.
   */
  onHide?(instance: DatepickerInstance): void

  /**
   * Callback function when the month has changed.
   */
  onMonthChange?(onMonthChangeOptions: {prevDate: Date; newDate: Date}): void

  /**
   * Using an input field with your datepicker? Want to customize its value anytime a date is selected? Provide a function that manually sets the provided input's value with your own formatting.
   *
   * NOTE: The formatter function will only run if the datepicker instance is associated with an <input> field.
   */
  formatter?(
    input: HTMLInputElement,
    date: Date,
    instance: DatepickerInstance
  ): void

  /**
   * If you would like to render the calendar inside the provided selector, don't provide a value for this option.
   * Providing a value for this option positions the calendar relative to the <input> field (or other element) it's associated with. This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered on the page respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
   *
   * Default - undefined
   */
  position?: 'tr' | 'tl' | 'br' | 'bl' | 'c'

  /**
   * Specify the day of the week your calendar starts on. 0 = Sunday, 1 = Monday, etc. Plays nice with the `customDays` option.
   *
   * Default - 0
   */
  startDay?: number

  /**
   * You can customize the display of days on the calendar by providing an array of 7 values. This can be used with the `startDay` option if your week starts on a day other than Sunday.
   *
   * Default - ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
   */
  customDays?: string[]

  /**
   * You can customize the display of the month name at the top of the calendar by providing an array of 12 strings.
   *
   * Default - ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
   */
  customMonths?: string[]

  /**
   * You can customize the display of the month names in the overlay view by providing an array of 12 strings. Keep in mind that if the values are too long, it could produce undesired results in the UI.
   *
   * Default - The first 3 characters of each item in `customMonths`.
   */
  customOverlayMonths?: string[]

  /**
   * Want the overlay to be the default view when opening the calendar? This property is for you. Simply set this property to 'overlay' and you're done. This is helpful if you want a month picker to be front and center.
   *
   * Default - 'calendar'
   */
  defaultView?: ViewType

  /**
   * Custom text for the year overlay submit button.
   *
   * Default - 'Submit'
   */
  overlayButton?: string

  /**
   * Custom placeholder text for the year overlay.
   *
   * Default - '4-digit year'
   */
  overlayPlaceholder?: string

  /**
   * An array of dates which indicate something is happening - a meeting, birthday, etc. I.e. an event.
   */
  events?: Date[]

  /**
   * By default, the datepicker will hide & show itself automatically depending on where you click or focus on the page. If you want the calendar to always be on the screen, use this option.
   *
   * Default - false
   */
  alwaysShow?: boolean

  /**
   * This will start the calendar with a date already selected. If Datepicker is used with an <input> element, that field will be populated with this date as well.
   */
  selectedDate?: Date

  /**
   * This will be the maximum threshold of selectable dates. Anything after it will be unselectable.
   *
   * NOTE: When using a daterange pair, if you set `maxDate` on the first instance options it will be ignored on the 2nd instance options.
   */
  maxDate?: Date

  /**
   * This will be the minumum threshold of selectable dates. Anything prior will be unselectable.
   *
   * NOTE: When using a daterange pair, if you set `minDate` on the first instance options it will be ignored on the 2nd instance options.
   */
  minDate?: Date

  /**
   * The date you provide will determine the month that the calendar starts off at.
   *
   * Default - today's month
   */
  startDate?: Date

  /**
   * By default, the datepicker will not put date numbers on calendar days that fall outside the current month. They will be empty squares. Sometimes you want to see those preceding and trailing days. This is the option for you.
   *
   * Default - false
   */
  showAllDates?: boolean

  /**
   * <input />'s can have a `disabled` or `readonly` attribute applied to them. In those cases, you might want to prevent Datepicker from selecting a date and changing the input's value. Set this option to `true` if that's the case. The calendar will still be functional in that you can change months and enter a year, but dates will not be selectable (or deselectable).
   *
   * Default - false
   */
  respectDisabledReadOnly?: boolean

  /**
   * Provide `true` to disable selecting weekends. Weekends are Saturday & Sunday. If your weekends are a set of different days or you need more control over disabled dates, check out the `disabler` option.
   *
   * Default - false
   */
  noWeekends?: boolean

  /**
   * Sometimes you need more control over which dates to disable. The `disabledDates` option is limited to an explicit array of dates and the `noWeekends` option is limited to Saturdays & Sundays. Provide a function that takes a JavaScript date as it's only argument and returns `true` if the date should be disabled. When the calendar builds, each date will be run through this function to determine whether or not it should be disabled.
   */
  disabler?(date: Date): boolean

  /**
   * Provide an array of JS date objects that will be disabled on the calendar. This array cannot include the same date as `selectedDate`. If you need more control over which dates are disabled, see the `disabler` option.
   */
  disabledDates?: Date[]

  /**
   * Optionally disable Datepicker on mobile devices. This is handy if you'd like to trigger the mobile device's native date picker instead. If that's the case, make sure to use an input with a type of "date" - <input type="date" />
   *
   * Default - false
   */
  disableMobile?: boolean

  /**
   * Clicking the year or month name on the calendar triggers an overlay to show, allowing you to enter a year manually. If you want to disable this feature, set this option to `true`.
   *
   * Default - false
   */
  disableYearOverlay?: boolean
}

export type DaterangePickerOptions = DatepickerOptions & {
  /**
   * Now we're getting fancy! If you want to link two instances together to help form a daterange picker, this is your option. Only two picker instances can share an `id`. The datepicker instance declared first will be considered the "start" picker in the range. There's a fancy `getRange` method for you to use as well.
   */
  id: any
}

export type Options = DatepickerOptions | DaterangePickerOptions

export type DatepickerInstance_REFERENCE = {
  /**
   * TODO - move this into the initialize options.
   * Manually set this property to `true` to fully disable the calendar.
   */
  disabled: boolean

  /**
   * Performs cleanup. This will remove the current instance from the DOM, leaving all others in tact. If this is the only instance left, it will also remove the event listeners that Datepicker previously set up.
   */
  remove(): void

  /**
   * Programmatically navigates the calendar to the date you provide. This doesn't select a date, it's literally just for navigation. You can optionally trigger the `onMonthChange` callback with the 2nd argument.
   */
  navigate(date: Date, triggerOnMonthChange?: boolean): void

  /**
   * Allows you to programmatically select or unselect a date on the calendar. To select a date on the calendar, pass in a JS date object for the 1st argument. If you set a date on a month other than what's currently displaying and you want the calendar to automatically change to it, pass in `true` as the 2nd argument.
   * Want to unselect a date? Simply run the function with no arguments.
   *
   * NOTE: This will not trigger the `onSelect` callback.
   */
  selectDate(date: Date, changeCalendar?: boolean): void
  selectDate(): void

  /**
   * Allows you to programmatically set the minimum selectable date or unset it. If this instance is part of a daterange instance (see the `id` option) then the other instance will be changed as well. To unset a minimum date, simply run the function with no arguments.
   */
  setMin(date: Date): void
  setMin(): void

  /**
   * Allows you to programmatically set the maximum selectable date or unset it. If this instance is part of a daterange instance (see the `id` option) then the other instance will be changed as well. To unset a maximum date, simply run the function with no arguments.
   */
  setMax(date: Date): void
  setMax(): void

  /**
   * Allows you to programmatically show the calendar. Using this method will trigger the `onShow` callback if your instance has one.
   *
   * NOTE: Want to show / hide the calendar programmatically with a button or by clicking some element? Make sure to use `stopPropagation` in your event callback! If you don't, any click event in the DOM will bubble up to Datepicker's internal oneHandler event listener, triggering logic to close the calendar since it "sees" the click event outside the calendar.
   */
  show(): void

  /**
   * Allows you to programmatically hide the calendar. If the `alwaysShow` property was set on the instance then this method will have no effect. Using this method will trigger the `onHide` callback if your instance has one.
   *
   * NOTE: Want to show / hide the calendar programmatically with a button or by clicking some element? Make sure to use `stopPropagation` in your event callback! If you don't, any click event in the DOM will bubble up to Datepicker's internal oneHandler event listener, triggering logic to close the calendar since it "sees" the click event outside the calendar.
   */
  hide(): void

  /**
   * Call this method on the picker to programmatically toggle the overlay. This will only work if the calendar is showing!
   */
  toggleOverlay(): void

  /**
   * The calendar element.
   */
  calendar: HTMLElement

  /**
   * The container element that houses the calendar. Use it to size the calendar or programmatically check if the calendar is showing.
   */
  calendarContainer: HTMLElement

  /**
   * A 0-index number representing the current month. For example, 0 represents January.
   */
  currentMonth: number

  /**
   * Calendar month in plain english. E.x. January
   */
  currentMonthName: string

  /**
   * The current year. E.x. 2099
   */
  currentYear: number

  /**
   * The value of the selected date. This will be `undefined` if no date has been selected yet.
   */
  selectedDate: Date | undefined

  /**
   * The element datepicker is relatively positioned against (unless centered).
   */
  el: Element

  /**
   * The minimum selectable date.
   */
  minDate: Date | undefined

  /**
   * The maximum selectable date.
   */
  maxDate: Date | undefined
}

export type DaterangePickerInstance = DatepickerInstance_REFERENCE & {
  /**
   * This method is only available on daterange pickers. It will return an object with `start` and `end` properties whose values are JavaScript date objects representing what the user selected on both calendars.
   */
  getRange(): {start: Date | undefined; end: Date | undefined}

  /**
   * If two datepickers have the same `id` option then this property will be available and refer to the other instance.
   */
  sibling: DaterangePickerInstance
}

declare function datepicker(
  selector: Selector,
  options?: DatepickerOptions
): void
declare function datepicker(
  selector: Selector,
  options: DaterangePickerOptions
): void

export type Datepicker = typeof datepicker

export type Selector = string | HTMLElement

/**
 * `t`, `r`, `b`, and `l` are all positioned relatively to the input the calendar is attached to.
 * `c` fixes the calendar smack in the middle of the screen. Useful for mobile devices.
 */
export type Sides = {
  t: 'top'
  r: 'right'
  b: 'bottom'
  l: 'left'
  c: 'c'
}

export type PickerType = 'picker' | 'rangepicker'

export type ViewType = 'calendar' | 'overlay'

export type InternalPickerData = {
  /**
   * All the existing DOM elements associated with the calendar.
   */
  selectorData: SelectorData
  type: PickerType
  id?: any

  /**
   * All the DOM elements created for the calendar.
   */
  pickerElements: PickerElements

  /**
   * Either the default months or those provided by the user.
   */
  months: readonly string[]

  /**
   * This date drives rendering the calendar. Only the month and year are used.
   */
  currentDate: Date

  startDate: Date
  selectedDate: Date | undefined
  disabledDates: Set<number>
  minDate: Date | undefined
  maxDate: Date | undefined
  noWeekends: boolean
  events: Set<number>
  startDay: number // Start day of the week.
  overlayMonths: string[] // Will also be sliced to 1st 3 characters.
  overlayPlaceholder: string
  overlayButtonText: string
  disableOverlay: boolean
  disabledMobile: boolean // Disable the datepicker on mobile devices. Allows the use of native datepicker if the input type is 'date'.
  isMobile: boolean // 'ontouchstart' in window
  alwaysShow: boolean
  showAllDates: boolean // Shows a date in every square rendered on the calendar (preceding and trailing month days).
  respectDisabledReadOnly: boolean // Prevents Datepicker from selecting dates when attached to inputs that are `disabled` or `readonly`.

  publicPicker: DatepickerInstance // The object returned to the user.
  isFirst?: boolean // Indicates this is the 1st instance in a daterange pair.
  sibling?: InternalPickerData // Just a reference to the other internal object in the daterange pair.

  onMonthChange: NonNullable<DatepickerOptions['onMonthChange']>
  onSelect: NonNullable<DatepickerOptions['onSelect']>
  _navigate(
    isFirstRun: boolean,
    data: Parameters<DatepickerInstance['navigate']>[0]
  ): void
  _selectDate(
    isFirstRun: boolean,
    data?: Parameters<DatepickerInstance['selectDate']>[0]
  ): void
  _setMinOrMax(
    isFirstRun: boolean,
    minOrMax: 'min' | 'max',
    data?: SetMinMaxInputType
  ): void

  isCalendarShowing: boolean
  isOverlayShowing: boolean
  defaultView: ViewType
  listenersMap: Map<{type: string; el: HTMLElement}, (e: any) => void>
}

type SetMinMaxInputType = {
  date?: Date
  triggerOnSelect?: boolean
}

export type DatepickerInstance = {
  calendarContainer: HTMLDivElement
  readonly currentDate: Date
  readonly selectedDate: Date | undefined
  readonly remove: () => void
  readonly removePair: () => void
  readonly navigate: ({
    date,
    triggerOnMonthChange,
  }: {
    date: Date
    triggerOnMonthChange?: boolean
  }) => void
  /**
   * `changeCalendar` only runs if `date` was provided.
   */
  readonly selectDate: (data?: {
    date?: Date
    changeCalendar?: boolean
    triggerOnMonthChange?: boolean
    triggerOnSelect?: boolean
  }) => void
  readonly setMin: (data?: SetMinMaxInputType) => void
  readonly setMax: (data?: SetMinMaxInputType) => void
  readonly getSelectedRange: () => void | {
    start: Date | undefined
    end: Date | undefined
  }
  readonly show: () => void
  readonly hide: () => void
  readonly toggleCalendar: () => void
  readonly toggleOverlay: () => void
}

export type SelectorData = {
  el: HTMLElement

  /**
   * The main use of datepicker is to associate it with an element (an <input /> in most cases) and have it positioned relative to that element. In order to accomplish this, a parent element needs to be explicitly positioned. This property is that element. If it doesn't contain any positioning already, `position: relative` will be added to it.
   */
  elementForPositioning: HTMLElement

  /**
   * The value of having run `getComputedStyle(elementForPositioning)`.
   */
  calculatedPosition: string

  /**
   * If the parent element already had an inline style set for position, this will be that value. Otherwise, it will be null.
   */
  originalPositionStyle: string | null
  shadowDom: ShadowRoot | null
  customElement: Element | null
}
