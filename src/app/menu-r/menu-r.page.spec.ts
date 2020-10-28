import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuRPage } from './menu-r.page';

describe('MenuRPage', () => {
  let component: MenuRPage;
  let fixture: ComponentFixture<MenuRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
