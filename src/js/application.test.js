import test from 'ava';
import sinon from 'sinon';
import Application from './application';

test('print correct start message', (t) => {
  let message = Math.random();
  let application = new Application({
    start: message
  });
  let printMethod = sinon.stub(application, 'print');

  application.start();

  t.true(printMethod.calledWith(message));
});

test('print correct perform message', (t) => {
  let message = Math.random();
  let application = new Application({
    perform: message
  });
  let printMethod = sinon.stub(application, 'print');

  application.start();
  application.doSomething();

  t.true(printMethod.calledWith(message));
});
