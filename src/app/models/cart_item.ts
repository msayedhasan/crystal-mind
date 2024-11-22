import 'package:flutter/material.dart';
import 'package:therapy/models/user.dart';

export interface CartItem {
   name? : string;
   nameAr? : string;
   image? : string;
   price? : number;
   qty? : number;

  // CartItem({
  //   required this.name,
  //   required this.nameAr,
  //   required this.image,
  //   required this.price,
  //   required this.qty,
  // });

  // factory CartItem.fromMap(Map<String, dynamic> json) {
  //   return CartItem(
  //     name: json['name'] ?? '',
  //     nameAr: json['nameAr'] ?? '',
  //     image: json['image'] ?? '',
  //     price: json['price'] ?? '',
  //     qty: json['qty'] ?? '',
  //   );
  // }

  // Map<String, dynamic> toJson() {
  //   return {
  //     'name': name,
  //     'nameAr': nameAr,
  //     'image': image,
  //     'price': price,
  //     'qty': qty,
  //   };
  // }
}
