"use client"
import { List, ListItem, Card } from "@material-tailwind/react";
import Link from "next/link";

export function CategoriesList({ data }) {
  return (
    <Card className="flex-1">
      <List>

        {
          data.map((category) => (
            <ListItem key={category._id}>
             <Link href={`/filter/${category._id}`}> {category.cat_title}</Link>
            </ListItem>

          ))
        }

      </List>
    </Card>
  );
}