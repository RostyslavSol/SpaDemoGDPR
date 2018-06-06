import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { SectionDetailsComponent } from './views/section.details/section.details.component';
import { InterviewComponent } from './views/interview/interview.component';
import { ReportComponent } from './views/report/report.component';
import { SectionsResolver } from './core/resolvers/sections.resolver';
import { SectionDetailsResolver } from './core/resolvers/section.details.resolver';
import { QuestionResolver } from './core/resolvers/question.resolver';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      sections: SectionsResolver
    }
  },
  {
    path: 'details/:sectionId',
    component: SectionDetailsComponent,
    resolve: {
      sectionDetails: SectionDetailsResolver
    }
  },
  {
    path: 'interview/:sectionId/:questionId',
    component: InterviewComponent,
    resolve: {
      question: QuestionResolver
    }
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
