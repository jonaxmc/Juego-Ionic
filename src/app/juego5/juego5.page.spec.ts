import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Juego5Page } from './juego5.page';

describe('Juego5Page', () => {
  let component: Juego5Page;
  let fixture: ComponentFixture<Juego5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Juego5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Juego5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
