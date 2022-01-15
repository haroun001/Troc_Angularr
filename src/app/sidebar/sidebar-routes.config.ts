import { DeposerComponent } from "app/dashboard/deposer/deposer.component";

export const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: 'profile', title: 'Mon Profile', icon: 'person', children: null },
    { path: 'table', title: 'List Annonce', icon: 'content_paste', children: null },
    {path: 'deposer', title: 'Deposer Annonce', icon: 'dashboard', children: null },
    { path: '#component', id: 'component', title: 'GERER', icon: 'apps', children: [
        { path: 'gestionadmin', title: 'Gerer utilisateurs', icon: 'P', children: null },
    { path: 'gestionannonces', title: 'Gerer Annonces', icon: 'W', children: null },
      ]},
     
    
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },
    { path: '', title: 'LOGOUT', icon: 'logout', children: null },
];
  