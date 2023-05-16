export type Profile = {
	id: number;
	name: string;
	username: string;
	email: string;
	img_link: string;
	address: {
	  street: string;
	  suite: string;
	  city: string;
	  zipcode: string;
	  geo: {
		lat: string;
		lng: string;
	  };
	};
	phone: string;
	website: string;
	company: {
	  name: string;
	  catchPhrase: string;
	  bs: string;
	};
}
