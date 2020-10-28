import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Juego2Page } from './juego2.page';

describe('Juego2Page', () => {
  let component: Juego2Page;
  let fixture: ComponentFixture<Juego2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Juego2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Juego2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
