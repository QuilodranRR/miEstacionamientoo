import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlashPage } from './slash.page';

describe('SlashPage', () => {
  let component: SlashPage;
  let fixture: ComponentFixture<SlashPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SlashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
