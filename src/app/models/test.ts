import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:therapy/models/patient.dart';
import 'package:therapy/models/user.dart';
import { Patient } from './patient';

export interface Test {
   _id?: String;

   name?: String;
   qty?: number;
   qtyAssigned?: number;
   qtyUsed?: number;
   child?: String;
   parentId?: String;
   parentName?: String;

   patient?: Patient;
   createdBy?: any;

   price?: Number;
   userId?: String;
   description?: String;
   createdAt?: String;
   updatedAt?: String;
   values?: [];
   orders?: [];

   active?: boolean;

   admin?: boolean;

   nameAr?: String;
   dialog?: any;
   image?: String;
   route?: String;

  // Test({
  //   this.id,
  //   this.name,
  //   this.qty,
  //   this.qtyAssigned,
  //   this.qtyUsed,
  //   this.child,
  //   this.parentId,
  //   this.parentName,
  //   this.patient,
  //   this.createdBy,
  //   this.userId,
  //   this.description,
  //   this.createdAt,
  //   this.updatedAt,
  //   this.values,
  //   this.orders,
  //   this.admin,
  //   this.nameAr,
  //   this.dialog,
  //   this.image,
  //   this.price,
  //   this.route,
  //   this.active,
  // });

  // factory Test.fromMap(Map<String, dynamic> json) {
  //   String? parsedCreatedAt;
  //   String? parsedUpdatedAt;
  //   if (json['createdAt'] != null) {
  //     DateTime x1 = DateTime.fromMillisecondsSinceEpoch(
  //         int.tryParse(json['createdAt']) ?? 0);
  //     parsedCreatedAt = DateFormat('dd-MM-yyyy').format(x1);
  //   }
  //   if (json['updatedAt'] != null) {
  //     DateTime x2 = DateTime.fromMillisecondsSinceEpoch(
  //         int.tryParse(json['updatedAt']) ?? 0);
  //     parsedUpdatedAt = DateFormat('dd-MM-yyyy').format(x2);
  //   }

  //   return Test(
  //     id: json['_id'] ?? '',
  //     name: json['name'] ?? '',
  //     qty: json['qty'] ?? 0,
  //     qtyAssigned: json['qtyAssigned'] ?? 0,
  //     qtyUsed: json['qtyUsed'] ?? 0,
  //     child: json['child'] ?? '',
  //     parentId: json['parent'] != null &&
  //             (json['parent'] is Map && json['parent']['_id'] != null)
  //         ? json['parent']['_id']
  //         : '',
  //     parentName: json['parent'] != null &&
  //             (json['parent'] is Map && json['parent']['name'] != null)
  //         ? json['parent']['name']
  //         : '',
  //     createdBy: json['createdBy'] != null ? json['createdBy']['name'] : null,
  //     patient:
  //         json['patient'] != null ? Patient.fromMap(json['patient']) : null,
  //     userId: json['user'] ?? '',
  //     description: json['description'] ?? '',
  //     values: json['values'] ?? [],
  //     // orders: json['orders'] ?? [],
  //     createdAt: parsedCreatedAt,
  //     updatedAt: parsedUpdatedAt,
  //     admin: json['admin'] ?? false,
  //   );
  }

  // Map<String, dynamic> toJson() {
  //   return {
  //     'name': name,
  //     'description': description,
  //     'values': values,
  //   };
  // }

