import { DescriptionAndAmountPipe } from './description-and-amount.pipe';

describe('DescriptionAndAmountPipe', () => {
  it('create an instance', () => {
    const pipe = new DescriptionAndAmountPipe();
    expect(pipe).toBeTruthy();
  });
});
