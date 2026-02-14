import { useProductStore } from "@/4_entities/product";
import { Badge } from "@/5_shared/ui/shadcn/badge";
import { Button } from "@/5_shared/ui/shadcn/button";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/5_shared/ui/shadcn/card";
import { useEffect } from "react";

export const ProductsCatalog = () => {
    const { products, fetchProducts, isLoading, error } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex flex-col gap-12">
            <div className="flex items-center justify-between">
                <p>Women’s Clothing</p>
                <p className="flex gap-6">
                    <span>New</span>
                    Recommended
                </p>
            </div>

            <div className="grid grid-cols-3">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        className="relative mx-auto w-full max-w-sm pt-0 "
                    >
                        {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
                        <img
                            src={product.image}
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardAction>
                                <Badge variant="secondary">Featured</Badge>
                            </CardAction>
                            <CardTitle>{product.title}</CardTitle>
                            <CardDescription className="line-clamp-2">
                                {product.description}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full">
                                {product.rating.count}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};
