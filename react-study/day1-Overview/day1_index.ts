type Age = number;

type Foo = {
	age: number;
	name: string;
}

interface Bar {
	age: Age;
	name: string;
}
const foo: Foo = {
	age: 10,
	name: 'kim',
}

const bar: Bar = {
	age: 10,
	name: 'kim',
}