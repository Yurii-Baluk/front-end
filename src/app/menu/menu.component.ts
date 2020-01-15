import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nb-menu-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  items = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: [],
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
      link: [],
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
      link: [],
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: [],
    },
  ];
}