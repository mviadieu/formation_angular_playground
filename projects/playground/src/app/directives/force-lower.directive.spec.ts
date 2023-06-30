import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForceLowerDirective } from './force-lower.directive';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('forceLowerDirective (TestBed)', () => {
  @Component({
    // ON CREE UN FAUT COMPOSENT POUR LE TEST
    selector: 'app-test',
    template: `<input type="text" force-lower value="MOCK_VALUE" />`, // ON MOCK L'INPUT
  })
  class TestComponent {}

  let fixture: ComponentFixture<TestComponent>; // la fixture est un navigateur virtuel qui permet de voir le test component

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ForceLowerDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.autoDetectChanges();
  });
  // La classe TestBed est une classe permettant de créer un environnement de test émulant le fonctionnement d'un module Angular.

  it('should lower initial input value', () => {
    const myInput: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    expect(myInput.value).toBe('mock_value');
  });

  it('should lower new input value', () => {
    const myInput: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    myInput.value = 'NEW_MOCK_VALUE';
    myInput.dispatchEvent(new Event('input')); // dispatch event diffuse l'événement (=! addEventListener : ecoute l'évenement)
    expect(myInput.value).toBe('new_mock_value');
  });
});

describe('forceLowerDirective (Spectator)', () => {
  @Component({
    selector: 'app-test',
    template: `<input type="text" force-lower value="MOCK_VALUE" />`,
  })
  class TestComponent {}

  let spectator: Spectator<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {});

  it('should lower initial input value', () => {});

  it('should lower new input value', () => {});
});
