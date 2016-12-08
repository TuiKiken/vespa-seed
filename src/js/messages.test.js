import test from 'ava';
import messages from './messages';

test('is object', (t) => {
  t.is(typeof messages, 'object');
});
