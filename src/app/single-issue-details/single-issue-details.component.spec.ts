import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIssueDetailsComponent } from './single-issue-details.component';

describe('SingleIssueDetailsComponent', () => {
  let component: SingleIssueDetailsComponent;
  let fixture: ComponentFixture<SingleIssueDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleIssueDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleIssueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
