import Image from "next/image";



export default function Page() {
  return (
    
    <div className="flex min-h-[calc(100dvh-64px)] flex-col">
      <main className="flex-1">
        <section className="mx-auto max-w-7xl p-8 pb-16">
          <h2 className="sr-only">Product List</h2>
          <ul role="list" data-testid="ProductList" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_1.png" alt="Picture of the author" width={500} height={500} className="h-full w-full object-contain object-center p-2 "/>
                </div>
                <div className=" mt-2 flex justify-between">
                  <div>
                    <h3 className=" mt-1 text-sm font-semibold text-neutral-900">KRVT 0001</h3>
                    <p className=" mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_2.png" alt="Picture of the author" width={500} height={500} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0002</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_3.png" alt="Picture of the author" width={512} height={512} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0003</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_4.png" alt="Picture of the author" width={512} height={512} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0004</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_5.png" alt="Picture of the author" width={512} height={512} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0005</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_6.png" alt="Picture of the author" width={512} height={512} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0006</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_7.png" alt="Picture of the author" width={512} height={512} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0007</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_8.png" alt="Picture of the author" width={512} height={512} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0008</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_9.png" alt="Picture of the author" width={512} height={512} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0009</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_10.png" alt="Picture of the author" width={512} height={512} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0010</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_11.png" alt="Picture of the author" width={512} height={512} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0011</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
            <li data-testid="ProductElement"><a href="/">
              <div>
                <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image src="./ayakkabi_12.png" alt="Picture of the author" width={512} height={512} className="h-full w-full object-contain object-center p-2 bg-transparent"/>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900">KRVT 0012</h3>
                    <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">Accessories</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">499.00 ₺</p>
                </div>
              </div>
            </a>
            </li>
          </ul>
        </section>
      </main>
    </div>

  );
}

