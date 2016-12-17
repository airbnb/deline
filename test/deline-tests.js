import { expect } from 'chai';

// eslint-disable-next-line import/no-unresolved, import/extensions
import deline from '../build/deline';

describe('deline', () => {
  it('works without interpolation', () => {
    const result = deline`some
      text with
      newlines`;
    expect(result).to.eql('some text with newlines');
  });

  it('works with interpolation', () => {
    const result = deline`first ${'line'}
                      ${'second'}
                      third`;
    expect(result).to.eql('first line second third');
  });

  it('works with blank first line', () => {
    const result = deline`
      Lorem ipsum
      dolor sit amit
    `;

    expect(result).to.eql('Lorem ipsum dolor sit amit');
  });

  it('works with multiple blank first lines', () => {
    const result = deline`

                    first
                    second
                    third`;
    expect(result).to.eql('first second third');
  });

  it('turns a double newline into a single newline', () => {
    const result = deline`
      It is wednesday

      my dudes
    `;
    expect(result).to.eql('It is wednesday\nmy dudes');
  });

  it('turns more than 2 newlines into a single newline', () => {
    const result = deline`
      It is wednesday






      my dudes
    `;
    expect(result).to.eql('It is wednesday\nmy dudes');
  });

  describe('single line input', () => {
    const expected = 'A single line of input.';

    it('works with single line input', () => {
      const result = deline`A single line of input.`;
      expect(result).to.eql(expected);
    });

    it('works with single line and closing backtick on newline', () => {
      const result = deline`
        A single line of input.
      `;
      expect(result).to.eql(expected);
    });

    it('works with single line and inline closing backtick', () => {
      const result = deline`
        A single line of input.`;
      expect(result).to.eql(expected);
    });
  });

  it('can be used as a function', () => {
    const arg = `
      A test argument.
    `;
    expect(deline(arg)).to.eql('A test argument.');
  });

  it('escapes backticks', () => {
    expect(deline`\``).to.eql('`');
  });

  it('doesn’t strip exlicit newlines', () => {
    const result = deline`
      <p>Hello world!</p>\n
    `;
    expect(result).to.eql('<p>Hello world!</p>\n');
  });
});
