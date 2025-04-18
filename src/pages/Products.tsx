import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { PackagePlus, Package, PackageCheck, PackageX } from 'lucide-react';
import StatCard from '../components/ui/StatCard';

const Products: React.FC = () => {
  const products = [
    { id: 'P001', name: 'Premium Widget', category: 'Widgets', price: '$99.99', stock: 150, status: 'Active' },
    { id: 'P002', name: 'Standard Gadget', category: 'Gadgets', price: '$49.99', stock: 300, status: 'Active' },
    { id: 'P003', name: 'Basic Thingamajig', category: 'Thingamajigs', price: '$19.99', stock: 0, status: 'Out of Stock' },
    { id: 'P004', name: 'Deluxe Doodad', category: 'Doodads', price: '$149.99', stock: 50, status: 'Active' },
    { id: 'P005', name: 'Economy Gizmo', category: 'Gizmos', price: '$29.99', stock: 500, status: 'Archived' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      case 'Out of Stock':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'Archived':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
    }
  };


  return (
    <main className="flex-1 p-4 md:p-6">
       <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold md:text-3xl">Products</h1>
        <Button>
          <PackagePlus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>
       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard
          title="Total Products"
          value="1,250"
          icon={Package}
        />
        <StatCard
          title="Active Products"
          value="1,100"
          icon={PackageCheck}
        />
        <StatCard
          title="Out of Stock"
          value="50"
          icon={PackageX}
        />
         <StatCard
          title="Archived"
          value="100"
          icon={PackageX} // Using PackageX again, consider a different icon if available/needed
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
          <CardDescription>Manage your products.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b bg-muted/50 text-muted-foreground">
                <tr>
                  <th className="px-4 py-2 font-medium">ID</th>
                  <th className="px-4 py-2 font-medium">Name</th>
                  <th className="px-4 py-2 font-medium">Category</th>
                  <th className="px-4 py-2 font-medium">Price</th>
                  <th className="px-4 py-2 font-medium">Stock</th>
                  <th className="px-4 py-2 font-medium">Status</th>
                  <th className="px-4 py-2 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b last:border-b-0 hover:bg-muted/50">
                    <td className="px-4 py-3">{product.id}</td>
                    <td className="px-4 py-3 font-medium">{product.name}</td>
                    <td className="px-4 py-3">{product.category}</td>
                    <td className="px-4 py-3">{product.price}</td>
                    <td className="px-4 py-3">{product.stock}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-xs ${getStatusBadge(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                     <td className="px-4 py-3 text-right">
                       <Button variant="ghost" size="sm">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           <div className="mt-4 flex justify-end text-sm text-muted-foreground">
            Showing 1-5 of 1250 results
         </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Products;
