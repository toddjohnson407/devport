/**
 * This file is used to store custom reusable Angular animations
 */
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  animation,
  useAnimation,
  state
} from '@angular/animations';

/** navbar opt hover animation */
export const optHov = 
  trigger('navOptHov', [
    state('hov', style({
      transform: 'rotateY(360deg)',
      backgroundColor: '#ffffff',
      color: 'rgb(250, 105, 100)'
    })),
    state('nohov', style({
      color: 'white',
      backgroundColor: 'rgb(250, 105, 100)',
      transform: 'rotateY(0deg)'
    })),
    transition('hov => nohov', [
      animate('500ms')
    ]),
    transition('nohov => hov', [
      animate('500ms')
    ])
  ]);

export const slideUpAnimation =
  trigger('slideUp', [
    state('vis', style({
      transform: 'translateY(-100%)'
    })),
    state('out', style({
      transform: 'translateY(0)'
    })),
    transition('out => vis', [ animate('600ms') ]),
    transition('vis => out', [ animate('600ms') ])
  ]);

/** page transition animation */
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Contact => *, About => Portfolio, About => Services, About => Home, Portfolio => Services, Portfolio => Home, Services => Home', [
      query(':enter, :leave', 
        style({ position: 'fixed', width: '100%' }), 
        { optional: true }),        
      group([
        query(':enter',[
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)'}),
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('Home => *, * => *', [
      query(':enter, :leave', 
        style({ position: 'fixed',  width: '100%' }), 
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }), 
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
      ])
    ]),
  ]);