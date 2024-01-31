import { MatMomentDateAdapterOptions, MomentDateAdapter } from '@angular/material-moment-adapter';
import moment, { Moment } from 'moment';
import twMoment from 'moment-taiwan';


export class TaiwanDateAdapter extends MomentDateAdapter {

  constructor(locale: string, options: MatMomentDateAdapterOptions) {
    super(locale, options);
    moment.locale(locale);
  }

  override parse(value: any, parseFormat: string): Moment | null {
    return moment(moment(value).format(parseFormat));
  }

  override format(date: Moment, displayFormat: string): string {
    return twMoment(date).format(displayFormat);
  }

  override getYearName(date: Moment): string {
    const twYear = twMoment(date).twYear();
    return (twYear > 0) ? `${twYear}` : '';
  }
}
