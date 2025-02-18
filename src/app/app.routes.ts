import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    {
        path: 'login',
        loadComponent: () => import('./auth-components/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
        children: [  
            {
                path: 'report',
                loadComponent: () => import('./admin/reports/reports.component').then(m => m.ReportsComponent),
                children: [
                    // {
                    //     path: 'report-list',
                    //     loadComponent: () => import('./admin/reports/report-list/report-list.component').then(m => m.ReportListComponent),
                    // },
                ]
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
            }
            

        ]
    },
   
]
