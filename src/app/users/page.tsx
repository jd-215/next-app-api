import Link from "next/link";

type jasonValueObjects = {
  [key: string | number]: string | number | boolean;
};

type jasonValueArrays = Array<jasonValueObjects>;

type T = jasonValueObjects | jasonValueArrays;

async function getUsers(): Promise<T | unknown> {
  let data = await fetch("http:localhost:3000/api/users");
  data = await data.json();
  // console.log(data);
  return data;
}

export default async function Page(): Promise<T | unknown> {
  const data: unknown = await getUsers();

  let dataObj: T;
  if (Array.isArray(data)) {
    dataObj = data;
  } else {
    dataObj = [
      {
        id: "0",
        name: "not found",
        age: "0",
        email: "not found",
      },
    ];
  }
  return (
    <div className="flex grow flex-row">
      <div className="grow flex justify-center space-x-2 text-2xl bg-gray-200">
        <div>
        <div className="p-4 space-x-8 bg-gray-300">
          <h1>Hello world </h1>
        </div>
        <div >
          {dataObj.map((item: any) => {
            return (
              <div key={item.id} className="m-4 flex flex-row space-x-8">
                <div className="p-4 bg-red-400">
                  <h3>
                    <Link href={`/users/${item.id}`}>{item.name}</Link>
                  </h3>
                </div>
                <div>
                  <h3 className="p-4 bg-green-400">
                    <Link href={`/users/${item.id}/update`}>Edit</Link>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}
