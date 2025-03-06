export type Response<T> =
	| {
			success: false;
			message: string;
			data: null;
	  }
	| {
			success: true;
			message: string;
			data: T;
	  };
