import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Juego1Page } from './juego1.page';

describe('Juego1Page', () => {
  let component: Juego1Page;
  let fixture: ComponentFixture<Juego1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Juego1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Juego1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
