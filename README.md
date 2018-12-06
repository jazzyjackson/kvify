# kvify
Parse .ini format config files and JSON files with a single function

Given the contents of a file as a string, returns an object, whether that string was:
```json
{
  "something":"cool"
}
```
returns what you would expect or...

```ini
something=oldschool
# with comments
and interestesting puntuation = !
# returns {something: "oldschool", "and interesting punctuation": "!" }
```
which you might not expect.
