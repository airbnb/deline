# deline

An ES6 string tag that strips unwanted newlines from multi-line strings.

## Usage

```js
import deline from 'deline';

function usageExample() {
  const example1 = deline`
    A string that’s too long to put on one line, so you decide to put it on multiple lines, but it
    actually isn’t supposed to have newlines in it because it’s just one long string.

    Except for above this line, which is ACTUALLY supposed to be a newline. But aside from that, no
    newlines. And we don’t want any leading/trailing lines, of course.\n

    Wait! Actually, we really want two newlines above this part. Otherwise it will look weird. One
    newline just isn’t enough, you know? Well, we have to be explicit about it with that newline
    character up there, but that’s no problem.
  `;

  const example2 = deline(`
    Also, deline can also be used as a function. Neat!
  `);

  return example1 + '\n\n' + example2;
}
```

```js
> console.log(usageExample());
```

```
A string that’s too long to put on one line, so you decide to put it on multiple lines, but it actually isn’t supposed to have newlines in it because it’s just one long string.
Except for above this line, which is ACTUALLY supposed to be a newline. But aside from that, no newlines. And we don’t want any leading/trailing lines, of course.

Wait! Actually, we really want two newlines above this part. Otherwise it will look weird. One newline just isn’t enough, you know? Well, we have to be explicit about it with that newline character up there, but that’s no problem.

Also, deline can also be used as a function. Neat!
```

## Acknowledgements

Deline is inspired by, and based on, the [dedent](https://github.com/dmnd/dedent) package. Thanks [@dmnd](https://github.com/dmnd)!

## License

MIT
