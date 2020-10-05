# Caesar-cipher-CLI-tool

This is awesome and useful crypto tool for encoding and decoding your super secret info! 

## Installation 

> Clone the repository -> 
> install dependencies ```npm install``` -> 
> go to *task1* directory (``` cd ./task1 ```  in command line)  -> 
> type ```node my-caesar-cli [options]``` in terminal


## Options 

- -s, --shift: a shift  - **required**, should be between 1 and 26 
- -i, --input: an input file - optional (if not specified standard input (console) used)
- -o, --output: an output file - optional (if not specified standard output (console) used)
- -a, --action: an action encode/decode - **required**, should be "encode" or "decode" 

**Usage example:**

```bash
$ node my-caesar-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node my-caesar-cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node my-caesar-cli --action decode --shift 7 --input decoded.txt --output plain.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
