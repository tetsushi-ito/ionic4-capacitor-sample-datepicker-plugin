import { Component } from '@angular/core';
import { DatePicker } from 'capacitor-datepicker';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  date;

  async showDatePicker() {

    const picker = new DatePicker();

    const current = new Date();

    const response = await picker.show({
      mode: 'date',
      date: current.toISOString(),
      theme: 'AppDialogTheme',
      title: '日付を選択',
      okText: 'OK',
      cancelText: 'キャンセル',
      is24Hours: false,
    });

    this.date = response.value;
  }
}
