/**
 * @author syt123450 / https://github.com/syt123450
 */

import { Sequential } from "./tsp-model/Sequential";
import { PixelSequential } from "./tsp-model/PixelSequential";

import { Conv1d } from "./layer/intemediate/Conv1d";
import { Conv2d } from "./layer/intemediate/Conv2d";
import { Conv2dTranspose } from "./layer/intemediate/Conv2dTranspose";
import { Cropping1d } from "./layer/intemediate/Cropping1d";
import { Cropping2d } from "./layer/intemediate/Cropping2d";
import { Input1d } from "./layer/input/Input1d";
import { Input2d } from "./layer/input/Input2d";
import { Input3d } from "./layer/input/Input3d";
import { Output1d } from "./layer/output/Output1d";
import { OutputDetection } from "./layer/output/OutputDetection";
import { YoloGrid } from "./layer/output/YoloGrid";
import { Flatten } from "./layer/intemediate/Flatten";
import { Pooling1d } from "./layer/intemediate/Pooling1d";
import { Pooling2d } from "./layer/intemediate/Pooling2d";
import { Reshape } from "./layer/intemediate/Reshape";
import { Dense } from "./layer/intemediate/Dense";
import { Padding1d } from "./layer/intemediate/Padding1d";
import { Padding2d } from "./layer/intemediate/Padding2d";
import { UpSampling1d } from "./layer/intemediate/UpSampling1d";
import { UpSampling2d } from "./layer/intemediate/UpSampling2d";
import { GlobalPooling1d } from "./layer/intemediate/GlobalPooling1d";
import { GlobalPooling2d } from "./layer/intemediate/GlobalPooling2d";
import { BasicLayer1d } from "./layer/intemediate/BasicLayer1d";
import { BasicLayer2d } from "./layer/intemediate/BasicLayer2d";
import { BasicLayer3d } from "./layer/intemediate/BasicLayer3d";
import { Activation1d } from "./layer/intemediate/Activation1d";
import { Activation2d } from "./layer/intemediate/Activation2d";
import { Activation3d } from "./layer/intemediate/Activation3d";

import { PixelConv2d } from "./layer/pixel/PixelConv2d";
import { PixelPadding } from "./layer/pixel/PixelPadding2d";
import { PixelInput } from "./layer/pixel/PixelInput";
import { PixelPooling2d } from "./layer/pixel/PixelPooling2d";
import { PixelFlatten } from "./layer/pixel/PixelFlatten";
import { PixelDense } from "./layer/pixel/PixelDense";
import { PixelOutput } from "./layer/pixel/PixelOutput";

import { Add } from "./merge/Add";
import { Concatenate } from "./merge/Concatenate";
import { Subtract } from "./merge/Subtract";
import { Maximum } from "./merge/Maximum";
import { Average } from "./merge/Average";
import { Dot } from "./merge/Dot";
import { Multiply } from "./merge/Multiply";

let layers = {

	Input1d: Input1d,
	Input2d: Input2d,
	Input3d: Input3d,
	Output1d: Output1d,
	OutputDetection: OutputDetection,
	YoloGrid: YoloGrid,
	Conv1d: Conv1d,
	Conv2d: Conv2d,
	Conv2dTranspose: Conv2dTranspose,
	Cropping1d: Cropping1d,
	Cropping2d: Cropping2d,
	Dense: Dense,
	Flatten: Flatten,
	Reshape: Reshape,
	Pooling1d: Pooling1d,
	Pooling2d: Pooling2d,
	Padding1d: Padding1d,
	Padding2d: Padding2d,
	GlobalPooling1d: GlobalPooling1d,
	GlobalPooling2d: GlobalPooling2d,
	UpSampling1d: UpSampling1d,
	UpSampling2d: UpSampling2d,
	Layer1d: BasicLayer1d,
	Layer2d: BasicLayer2d,
	Layer3d: BasicLayer3d,
	Activation1d: Activation1d,
	Activation2d: Activation2d,
	Activation3d: Activation3d,

	PixelConv2d: PixelConv2d,
	PixelPadding: PixelPadding,
	PixelInput: PixelInput,
	PixelPooling2d: PixelPooling2d,
	PixelFlatten: PixelFlatten,
	PixelDense: PixelDense,
	PixelOutput: PixelOutput,

	Add: Add,
	Concatenate: Concatenate,
	Subtract: Subtract,
	Dot: Dot,
	Multiply: Multiply,
	Average: Average,
	Maximum: Maximum

};

let model = {

	Sequential: Sequential,
	PixelSequential: PixelSequential

};

export { model, layers };